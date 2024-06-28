#!/usr/bin/env python3
""" Auth file for auth class
"""

from flask import request
from typing import List, TypeVar


class Auth:
    """ A class to manage the API authentication.
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Check if the request is authenticated. """
        if path is None or excluded_paths is None or len(excluded_paths) < 1:
            return True
        if path[-1] == '/':
            path = path[0: -1]
        excluded_paths = map(lambda x: x[0:-1] if x[-1] == '/' else x, excluded_paths)
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """ Get the authorization header. """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ Get the current user. """
        return None
