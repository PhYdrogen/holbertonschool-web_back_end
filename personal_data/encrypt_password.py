#!/usr/bin/env python3
"""" encrypt password file """

import bcrypt
from typing import ByteString


def hash_password(pwd: str) -> ByteString:
    """ hashing password base on pwd """
    return bcrypt.hashpw(str.encode(pwd), bcrypt.gensalt())
