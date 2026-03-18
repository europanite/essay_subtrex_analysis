import re

src = "problems_of_philosophy.txt"
dst = "problems_of_philosophy_reflowed.txt"

text = open(src, "r", encoding="utf-8").read()

# Remove Gutenberg header/footer
start = re.search(r"\*\*\* START OF THE PROJECT GUTENBERG EBOOK.*?\*\*\*", text, re.S)
if start:
    text = text[start.end():]

end = re.search(r"\*\*\* END OF THE PROJECT GUTENBERG EBOOK.*?\*\*\*", text, re.S)
if end:
    text = text[:end.start()]

paras = re.split(r"\n\s*\n", text)
paras = [
    " ".join(line.strip() for line in p.splitlines() if line.strip())
    for p in paras
]
text = "\n\n".join(p for p in paras if p.strip())

open(dst, "w", encoding="utf-8").write(text)
print(f"written: {dst}")
