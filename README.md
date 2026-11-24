# The World in One Day — Monday, 23 November 2026

[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/Ranger-putih/news-image-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/Ranger-putih/news-image-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Entry for the [make.fun bounty "Sum up 23 November's world news in one image"](https://make.fun/bounty/news-image-20261123).

## What it is

A newspaper front page, drawn with Python PIL (sharp rendered text —
no image model was allowed near the words), summing up Monday
23 November 2026 in seven stories:

- **COP31 collapses** — UN climate talks in Antalya end with no deal on
  fossil fuels or money; the longest COP ever, and the first full collapse
  of a main agreement since Copenhagen 2009 (lead story, with a drawn
  illustration of the empty summit hall).
- **Iran strikes Bahrain** — a civilian industrial site is hit, 2 injured;
  tankers attacked in the Strait of Hormuz; oil nears $90.
- **Russia hits Kryvyi Rih**, Zelenskyy's hometown — a child and a young
  woman killed, 25 apartment blocks damaged, 14 missing in Dymer.
- **Ukrainian sea drones hit two Russian ships** in the Libyan port of
  Benghazi.
- **Israeli strike kills 3 in Gaza** — a truck carrying food and papers
  is hit; the World Central Kitchen says the vehicle was not affiliated.
- **Asian chip stocks slide** — Kospi falls as much as 5.8% and closes
  down 3.3%; Samsung −3.1%, SK Hynix −2.5%.
- **"Chapo Isidro" captured** — the US announces the capture of Sinaloa
  cartel leader Fausto Isidro Meza Flores by Mexico's military.

## How it runs

`main.ts` (Node 22) copies the pre-drawn `entry.png` to
`/output/entry.png`. Deterministic — two runs produce identical bytes.
No network is used.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
