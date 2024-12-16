import os
from PIL import Image

def convert_to_webp(file_path, quality=85):
    """Convert the image to WebP format and overwrite the original file."""
    with Image.open(file_path) as img:
        new_file_path = file_path.rsplit('.', 1)[0] + '.webp'
        img.save(new_file_path, 'webp', optimize=True, quality=quality)
        os.remove(file_path)
        print(f'Converted: {file_path} to {new_file_path}')

def convert_images_in_directory(directory, quality=85):
    """Convert all images in the given directory to WebP format."""
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                convert_to_webp(file_path, quality)

if __name__ == "__main__":
    directory = '.'  # 替换为你的工作目录路径
    convert_images_in_directory(directory)