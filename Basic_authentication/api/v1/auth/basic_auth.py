#!/usr/bin/env python3
""" Basic Auth file for basic auth class
"""

from api.v1.auth.auth import Auth
from flask import request
from typing import List, TypeVar
import base64
import binascii


class BasicAuth(Auth):
    """ Basic authentication class
    """
    def extract_base64_authorization_header(
        self, authorization_header: str
    ) -> str:
        """ Extract Base64 """
        if (
            authorization_header is None
            or not isinstance(authorization_header, str)
        ):
            return None

        if not authorization_header.startswith("Basic "):
            return None

        base64_part = authorization_header.split(" ")[1]
        return base64_part

    def decode_base64_authorization_header(
        self, base64_authorization_header: str
    ) -> str:
        """ Decode Base64 """
        if (
            base64_authorization_header is None
            or not isinstance(base64_authorization_header, str)
        ):
            return None

        try:
            decoded_bytes = base64.b64decode(base64_authorization_header)
            decoded_str = decoded_bytes.decode('utf-8')
            return decoded_str
        except binascii.Error:
            return None

    def extract_user_credentials(
        self, decoded_base64_authorization_header: str
    ) -> (str, str):
        """ Extract User Credentials """
        if (
            decoded_base64_authorization_header is None
            or not isinstance(decoded_base64_authorization_header, str)
            or ':' not in decoded_base64_authorization_header
        ):
            return None, None

        email, password = decoded_base64_authorization_header.split(':', 1)
        return email, password
