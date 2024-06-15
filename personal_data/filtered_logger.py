#!/usr/bin/env python3
"""" filtered logger with class """

from typing import List, Tuple
import re
import logging


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
    """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"
    FIELDS: List[str] = []

    def __init__(self, fields: Tuple[str]):
        """ The init method """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        for f in fields:
            self.FIELDS.append(f)

    def format(self, record: logging.LogRecord) -> str:
        """ The format method """
        return self.filter_datum(record.getMessage())

    def filter_datum(self, message: str) -> str:
        """ this function hide the data from the main """
        patern = "|".join(self.FIELDS)
        return re.sub(f'({patern})=.*?{self.SEPARATOR}', r'\g<1>' + "="
                      + self.REDACTION + self.SEPARATOR, message)
