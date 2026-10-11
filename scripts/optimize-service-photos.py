from pathlib import Path
from PIL import Image

ROOT = Path("public/images/photos")
OUT = ROOT / "optimized"
OUT.mkdir(parents=True, exist_ok=True)

FILES = {
    "ChatGPT Image Oct 11, 2026, 05_39_23 PM-8.png": "01-adjustment-of-status.webp",
    "ChatGPT Image Oct 11, 2026, 05_39_23 PM-7.png": "02-removal-of-conditions.webp",
    "ChatGPT Image Oct 11, 2026, 05_39_24 PM-3.png": "03-naturalization.webp",
    "ChatGPT Image Oct 11, 2026, 05_39_25 PM-4.png": "04-vawa.webp",
    "ChatGPT Image Oct 11, 2026, 05_39_26 PM-5.png": "05-asylum.webp",
    "ChatGPT Image Oct 11, 2026, 05_39_27 PM-6.png": "06-uscis-requests.webp",
    "ChatGPT Image Oct 11, 2026, 05_46_25 PM-1.png": "07-translations.webp",
    "ChatGPT Image Oct 11, 2026, 05_46_27 PM-2.png": "08-other-services.webp",
}

for source_name, output_name in FILES.items():
    source = ROOT / source_name
    if not source.exists():
        raise FileNotFoundError(source)

    with Image.open(source) as image:
        image = image.convert("RGB")
        original = image.size
        image.thumbnail((1400, 1800), Image.Resampling.LANCZOS)
        target = OUT / output_name
        image.save(
            target,
            "WEBP",
            quality=90,
            method=6,
            optimize=True,
            exif=b"",
        )
        print(f"{source_name}: {original} -> {image.size}, {target.stat().st_size} bytes")
