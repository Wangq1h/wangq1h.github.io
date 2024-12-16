import os
from PIL import Image

def compress_image(file_path, quality=85):
    """Compress the image and overwrite the original file."""
    with Image.open(file_path) as img:
        img.save(file_path, optimize=True, quality=quality)

def compress_images_in_directory(directory, quality=85):
    """Compress all .png images in the given directory."""
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.png'):
                file_path = os.path.join(root, file)
                compress_image(file_path, quality)
                print(f'Compressed: {file_path}')

if __name__ == "__main__":
    directory = '.'  # 替换为你的工作目录路径
    compress_images_in_directory(directory)