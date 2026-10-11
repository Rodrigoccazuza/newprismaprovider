"""Convert the six black-backed icon WebPs into transparent RGBA PNGs."""
from pathlib import Path
from PIL import Image
import numpy as np

folder = Path("public/images/why")
for path in sorted(folder.glob("*.webp")):
    im = Image.open(path).convert("RGB")
    rgb = np.asarray(im, dtype=np.float32)
    intensity = np.max(rgb, axis=2)
    # Black background becomes transparent; chrome highlights stay opaque.
    alpha = np.clip((intensity - 8.0) / 104.0, 0, 1)
    alpha = alpha * alpha * (3.0 - 2.0 * alpha)
    # Recover colors originally composited against opaque black.
    corrected = np.clip(rgb / np.maximum(alpha[..., None], 0.08), 0, 255)
    result = np.concatenate((corrected, (alpha * 255)[..., None]), axis=2).astype("uint8")
    output = path.with_suffix(".png")
    Image.fromarray(result, "RGBA").save(output, optimize=True)
    print(f"{output}: {Image.open(output).size} RGBA")
