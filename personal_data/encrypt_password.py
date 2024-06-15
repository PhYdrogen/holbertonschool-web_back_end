#!/usr/bin/env python3
"""" encrypt password file """

import bcrypt


def hash_password(pwd: str) -> bytes:
    """ hashing password base on pwd """
    return bcrypt.hashpw(str.encode(pwd), bcrypt.gensalt())
