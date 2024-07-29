#!/usr/bin/env python3
"""
AUTH file
"""
import bcrypt
import uuid


def _hash_password(password: str) -> bytes:
    """ hash password for security """
    return bcrypt.hashpw(password.encode("UTF-8"), bcrypt.gensalt())


def _generate_uuid() -> str:
    """ generate uuid """
    return str(uuid.uuid4())
