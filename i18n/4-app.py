#!/usr/bin/env python3
"""
Basic word for doc
"""
from flask import Flask, render_template, request
from flask_babel import Babel


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
    return render_template("1-index.html")


@babel.localeselector
def get_locale() -> str:
    """ get local languages """
    locale = request.args.get("locale")
    if (locale is not None and locale in Config.LANGUAGES):
        return locale

    return request.accept_languages.best_match(Config.LANGUAGES)
