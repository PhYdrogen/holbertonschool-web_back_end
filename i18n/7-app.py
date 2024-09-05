#!/usr/bin/env python3
"""
Basic word for doc
"""
from flask import Flask, render_template, request, g
from flask_babel import Babel
from typing import Dict
import pytz


class Config():
    """ class Config """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = 'en'
    BABEL_DEFAULT_TIMEZONE = 'UTC'


app = Flask(__name__)
app.config.from_object(Config)
babel = Babel(app)


@app.route("/")
def index():
    """ index """
    return render_template("7-index.html")


@babel.localeselector
def get_locale() -> str:
    """ get local languages """
    locale = request.args.get("locale")
    if (locale is not None and locale in Config.LANGUAGES):
        return locale

    if g.user:
        user_locale = g.user.get("locale")
        if user_locale and user_locale in Config.LANGUAGES:
            return user_locale

    return request.accept_languages.best_match(Config.LANGUAGES)


users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


def get_user() -> Dict:
    """ Get the user based to query parameter 'login_as'
    """
    login_as = request.args.get("login_as")
    if login_as is None:
        return None

    try:
        id = int(login_as)
    except ValueError:
        return None

    return users.get(id)


@app.before_request
def before_request():
    """ Setup app state before every request
    """
    user = get_user()

    if user is not None:
        g.user = user


def get_timezone() -> str:
    """ Find the best timezone to use based on query and user
    """
    query_timezone = request.args.get("timezone")
    try:
        return str(pytz.timezone(query_timezone))
    except pytz.exceptions.UnknownTimeZoneError:
        pass

    if g.user:
        user_timezone = g.user.get("timezone")
        try:
            return str(pytz.timezone(user_timezone))
        except pytz.exceptions.UnknownTimeZoneError:
            pass

    return Config.BABEL_DEFAULT_TIMEZONE
