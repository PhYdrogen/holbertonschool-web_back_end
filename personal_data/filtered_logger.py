#!/usr/bin/env python3
"""" filtered logger """

from typing import List
import re


def filter_datum(fields: List[str],
                 redaction: str, message: str, separator: str):
    """ this function hide the data from the main """
    patern = "|".join(fields)
    return re.sub(f'({patern})=.*?;', r'\g<1>=' + redaction + ";", message)
