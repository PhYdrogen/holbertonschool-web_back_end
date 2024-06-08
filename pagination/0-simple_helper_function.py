#!/usr/bin/env python3
""" file simple_helper_function.py """

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """simple helper function to get the index page
    """
    return (((page - 1) * page_size), page * page_size)
