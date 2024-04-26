#!/usr/bin/env python3
"""
Complex types - list of floats
"""


def sum_list(input_list: list[float]) -> float:
    """ Complex types - list of floats """
    sum: float = 0
    for fl in input_list:
        sum += fl
    return sum
