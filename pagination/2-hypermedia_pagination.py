#!/usr/bin/env python3
""" file hypermedia_pagination """

import csv
import math
from typing import List, Tuple, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get a page of the dataset
        """
        assert type(page) is int
        assert type(page_size) is int
        assert page > 0 and page_size > 0
        self.dataset()
        t = self.index_range(page, page_size)
        if page > len(self.__dataset):
            return []
        return self.__dataset[t[0]:t[1]]

    def index_range(self, page: int, page_size: int) -> Tuple[int, int]:
        """simple helper function to get the index page
        """
        return (((page - 1) * page_size), page * page_size)

    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict[str, str]:
        """Get a page of the dataset
        """
        gp = self.get_page(page, page_size)
        total = len(self.__dataset) // page_size + 1

        return {"page_size": len(gp),
                "page": page,
                "data": gp,
                "next_page": None if page + 1 > total else page + 1,
                "previous_page": None if page - 1 <= 0 else page - 1,
                "total_page": total}
