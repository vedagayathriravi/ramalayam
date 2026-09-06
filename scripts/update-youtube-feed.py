#!/usr/bin/env python3
"""Fetch YouTube channel RSS and write youtube-feed.json for the static site."""
import json
import sys
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone

CHANNEL_ID = "UChuGa1278z9uRda_oRk17RQ"
CHANNEL_HANDLE = "SriKodandaRamaswamiAlayam"
FEED_URL = f"https://www.youtube.com/feeds/videos.xml?channel_id={CHANNEL_ID}"
OUT_PATH = "youtube-feed.json"

NS = {
    "atom": "http://www.w3.org/2005/Atom",
    "yt": "http://www.youtube.com/xml/schemas/2015",
    "media": "http://search.yahoo.com/mrss/",
}


def main():
    with urllib.request.urlopen(FEED_URL, timeout=30) as resp:
        xml_bytes = resp.read()
    root = ET.fromstring(xml_bytes)
    items = []
    for entry in root.findall("atom:entry", NS):
        vid_el = entry.find("yt:videoId", NS)
        if vid_el is None or not vid_el.text:
            continue
        video_id = vid_el.text.strip()
        title_el = entry.find("atom:title", NS)
        pub_el = entry.find("atom:published", NS)
        link_el = entry.find("atom:link", NS)
        title = (title_el.text or "").strip()
        published = (pub_el.text or "").strip()
        link = link_el.get("href") if link_el is not None else f"https://www.youtube.com/watch?v={video_id}"
        media = entry.find("media:group/media:content", NS)
        duration = int(media.get("duration", "0")) if media is not None else 0
        items.append({
            "videoId": video_id,
            "title": title,
            "published": published,
            "link": link,
            "thumb": f"https://i.ytimg.com/vi/{video_id}/hqdefault.jpg",
            "duration": duration,
        })

    payload = {
        "channelId": CHANNEL_ID,
        "channelHandle": CHANNEL_HANDLE,
        "updatedAt": datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
        "items": items,
    }
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(payload, f, ensure_ascii=False, indent=2)
        f.write("\n")
    print(f"Wrote {len(items)} videos to {OUT_PATH}")


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)
