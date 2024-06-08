#!/usr/bin/python3
""" file simple_helper_function.py """


def index_range(page: int, page_size: int) -> tuple:
    """ simple helper function to get the index page """
    return (((page - 1) * page_size), page * page_size)
