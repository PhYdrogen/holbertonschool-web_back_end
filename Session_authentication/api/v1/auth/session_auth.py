#!/usr/bin/env python3
""" Session Auth file for session auth class
"""

from api.v1.auth.auth import Auth
from models.user import User
from flask import request
from typing import List, TypeVar
import base64
import binascii


class SessionAuth(Auth):
    """ Session authentication class
    """
    pass