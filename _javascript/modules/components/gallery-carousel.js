function centerNearestSlide(track) {
  const slides = Array.from(track.querySelectorAll('.gallery-carousel-item'));
  if (slides.length === 0) {
    return;
  }

  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;

  let nearest = slides[0];
  let nearestDistance = Infinity;

  slides.forEach((slide) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const distance = Math.abs(trackCenter - slideCenter);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearest = slide;
    }
  });

  nearest.scrollIntoView({
    behavior: 'smooth',
    block: 'nearest',
    inline: 'center'
  });
}

function updateSlideState(track) {
  const slides = Array.from(track.querySelectorAll('.gallery-carousel-item'));
  if (slides.length === 0) {
    return;
  }

  const trackRect = track.getBoundingClientRect();
  const trackCenter = trackRect.left + trackRect.width / 2;

  let activeIndex = 0;
  let nearestDistance = Infinity;

  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    const slideCenter = rect.left + rect.width / 2;
    const distance = Math.abs(trackCenter - slideCenter);

    if (distance < nearestDistance) {
      nearestDistance = distance;
      activeIndex = index;
    }
  });

  slides.forEach((slide, index) => {
    const delta = Math.abs(index - activeIndex);
    slide.classList.toggle('is-active', delta === 0);
    slide.classList.toggle('is-neighbor', delta === 1);
  });
}

export function galleryCarousel() {
  const tracks = document.querySelectorAll('[data-gallery-carousel]');

  if (tracks.length === 0) {
    return;
  }

  tracks.forEach((track) => {
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let hasDragged = false;
    let snapTimer = null;

    const scheduleSnap = () => {
      window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => centerNearestSlide(track), 120);
    };

    const stopDragging = () => {
      if (!isDragging) {
        return;
      }

      isDragging = false;
      track.classList.remove('is-dragging');
      scheduleSnap();
    };

    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType === 'mouse' && event.button !== 0) {
        return;
      }

      isDragging = true;
      hasDragged = false;
      startX = event.clientX;
      startScrollLeft = track.scrollLeft;
      track.classList.add('is-dragging');
      track.setPointerCapture(event.pointerId);
    });

    track.addEventListener('pointermove', (event) => {
      if (!isDragging) {
        return;
      }

      const delta = event.clientX - startX;
      if (Math.abs(delta) > 6) {
        hasDragged = true;
      }

      track.scrollLeft = startScrollLeft - delta;
      updateSlideState(track);
    });

    track.addEventListener('pointerup', stopDragging);
    track.addEventListener('pointercancel', stopDragging);
    track.addEventListener('pointerleave', stopDragging);

    track.addEventListener(
      'click',
      (event) => {
        if (!hasDragged) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
        hasDragged = false;
      },
      true
    );

    track.addEventListener(
      'wheel',
      (event) => {
        const mostlyVertical = Math.abs(event.deltaY) > Math.abs(event.deltaX);
        if (!mostlyVertical) {
          return;
        }

        event.preventDefault();
        track.scrollLeft += event.deltaY;
        updateSlideState(track);
        scheduleSnap();
      },
      { passive: false }
    );

    track.addEventListener(
      'scroll',
      () => {
        updateSlideState(track);
        scheduleSnap();
      },
      { passive: true }
    );

    track.addEventListener('keydown', (event) => {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
        return;
      }

      event.preventDefault();
      const direction = event.key === 'ArrowRight' ? 1 : -1;
      track.scrollBy({
        left: direction * track.clientWidth * 0.72,
        behavior: 'smooth'
      });
      updateSlideState(track);
      scheduleSnap();
    });

    updateSlideState(track);
    window.setTimeout(() => centerNearestSlide(track), 80);
  });
}
