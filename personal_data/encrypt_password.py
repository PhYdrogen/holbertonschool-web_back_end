#!/usr/bin/env python3
"""" encrypt password file """

import bcrypt


def hash_password(pwd: str) -> bytes:
    """ hashing password base on pwd """
    return bcrypt.hashpw(str.encode(pwd), bcrypt.gensalt())


def is_valid(hashed_password: bytes, pwd: str) -> bool:
    """ check if password is valid """
    return bcrypt.checkpw(str.encode(pwd), hashed_password)
