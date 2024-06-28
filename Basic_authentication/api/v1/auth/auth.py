#!/usr/bin/env python3
""" Auth file for auth class
"""
from flask import request
from typing import List
from typing import TypeVar


class Auth:
    """ A class to manage the API authentication.
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        return False

    def authorization_header(self, request=None) -> str:
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        return None
