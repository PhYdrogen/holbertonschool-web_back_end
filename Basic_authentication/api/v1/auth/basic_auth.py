#!/usr/bin/env python3
""" Basic Auth file for basic auth class
"""

from api.v1.auth.auth import Auth
from flask import request
from typing import List, TypeVar


class BasicAuth(Auth):
    """ Basic authentication class
    """
    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Check if the request is authenticated. """
        if path is None or excluded_paths is None or len(excluded_paths) < 1:
            return True
        if path[-1] == '/':
            path = path[0: -1]
        excluded_paths = map(lambda x: x[0:-1] if x[-1] == '/' else x,
                             excluded_paths)
        if path in excluded_paths:
            return False
        return True

    def authorization_header(self, request=None) -> str:
        """ Get the authorization header. """
        if request is None:
            return None
        auth = request.headers.get('Authorization')
        if auth is None:
            return None
        return auth

    def current_user(self, request=None) -> TypeVar('User'):
        """ Get the current user. """
        return None
