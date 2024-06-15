#!/usr/bin/env python3
"""" filtered logger with class """

from typing import List, Tuple
import re
import logging
import os
import mysql.connector


def filter_datum(fields: List[str],
                 redaction: str, message: str, separator: str) -> str:
    """ this function hide the data from the main """
    patern = "|".join(fields)
    return re.sub(f'({patern})=.*?{separator}', r'\g<1>' + "="
                  + redaction + separator, message)


class RedactingFormatter(logging.Formatter):
    """ Redacting Formatter class
    """

    REDACTION = "***"
    FORMAT = "[HOLBERTON] %(name)s %(levelname)s %(asctime)-15s: %(message)s"
    SEPARATOR = ";"
    FIELDS: List[str]

    def __init__(self, fields: List[str]):
        """ The init method """
        super(RedactingFormatter, self).__init__(self.FORMAT)
        self.FIELDS = fields

    def format(self, record: logging.LogRecord) -> str:
        """ The format method """
        return filter_datum(self.FIELDS, self.REDACTION,
                            super().format(record), self.SEPARATOR)


PII_FIELDS = ("name", "phone", "ssn", "password", "email")


def get_logger() -> logging.Logger:
    """ generate a logger """
    sh = logging.StreamHandler()
    log = logging.getLogger("user_data")
    ##
    sh.setLevel(logging.INFO)
    sh.setFormatter(RedactingFormatter(fields=PII_FIELDS))
    ##
    log.setLevel(logging.INFO)
    log.propagate = False
    log.addHandler(sh)
    return log


def get_db() -> mysql.connector.connection.MySQLConnection:
    """ create db conncetion """
    username_db = os.getenv("PERSONAL_DATA_DB_USERNAME", "root")
    password_db = os.getenv("PERSONAL_DATA_DB_PASSWORD", "")
    host_db = os.getenv("PERSONAL_DATA_DB_HOST", "localhost")
    db_name = os.getenv("PERSONAL_DATA_DB_NAME", "my_db")

    return mysql.connector.connect(
        host=host_db,
        user=username_db,
        password=password_db,
        database=db_name
    )


def main():
    """ main """


if __name__ == "__main__":
    main()
