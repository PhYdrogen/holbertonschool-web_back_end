#!/usr/bin/env python3
"""" encrypt password file """

import bcrypt


def hash_password(pwd: str) -> str:
    """ hashing password base on pwd """
    return bcrypt.hashpw(pwd, bcrypt.gensalt())
