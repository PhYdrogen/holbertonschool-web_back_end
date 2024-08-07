#!/usr/bin/env python3
""" Session Auth file for session auth class
"""

from api.v1.auth.auth import Auth
from models.user import User
from flask import request
from typing import List, TypeVar
import base64
import binascii
import uuid


class SessionAuth(Auth):
    """ Session authentication class
    """

    user_id_by_session_id = {}

    def create_session(self, user_id: str = None) -> str:
        """ creates a Session ID for a user_id """
        if user_id is None:
            return None
        if type(user_id) is not str:
            return None
        session_id = str(uuid.uuid4())
        self.user_id_by_session_id[session_id] = user_id
        return session_id

    def user_id_for_session_id(self, session_id: str = None) -> str:
        """ that returns a User ID based on a Session ID """
        if session_id is None:
            return None
        if type(session_id) is not str:
            return None

        return self.user_id_by_session_id.get(session_id)

    def current_user(self, request=None):
        """ returns a User based on a cookie """
        if request is None:
            return None

        session_cookie = self.session_cookie(request)

        user_id = self.user_id_for_session_id(session_cookie)
        return User.get(user_id)

    def destroy_session(self, request=None):
        """ destroys a session """
        if request is None:
            return False

        if self.session_cookie(request) is None:
            return False
        else:
            session_cookie = self.session_cookie(request)

        if self.user_id_for_session_id(session_cookie) is None:
            return False

        del self.user_id_by_session_id[session_cookie]
        return True
