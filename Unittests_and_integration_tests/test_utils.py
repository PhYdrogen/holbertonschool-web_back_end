#!/usr/bin/env python3
import utils
import unittest
from parameterized import parameterized
from unittest.mock import Mock
from unittest.mock import patch

class TestAccessNestedMap(unittest.TestCase):

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        self.assertEqual(utils.access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, "a,"),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        with self.assertRaises(KeyError):
            utils.access_nested_map(nested_map, path)

class TestGetJson(unittest.TestCase):

    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    @patch("requests.get")
    def test_get_json(self, url: str, payload: dict, mock_get: Mock):
        mock_resp = Mock()
        mock_resp.json.return_value = payload
        mock_get.return_value = mock_resp
        self.assertEqual(utils.get_json(url), payload)
