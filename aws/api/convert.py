import os
import sys

CWD = os.path.dirname(os.path.realpath(__file__))
LOAD_PATH = os.path.join(CWD, "..", "venv/lib/python3.8/site-packages")
sys.path.insert(0, LOAD_PATH)

from mercy_reader import reader

def handler(event, context):
    print(f"event: {event}")
    print(f"context: {context}")

    obj = reader.main(
        event,
        80,
    )
    return reader.Format.formatter['md'](obj)
