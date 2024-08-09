#!/usr/bin/env python3
import utils
import unittest
from utils import memoize
from parameterized import parameterized
from unittest.mock import Mock
from unittest.mock import patch


class TestAccessNestedMap(unittest.TestCase):
    """Test access_nested_map function"""
    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2),
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """Test that access_nested_map returns the expected value"""
        self.assertEqual(utils.access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, "a,"),
        ({"a": 1}, ("a", "b"))
    ])
    def test_access_nested_map_exception(self, nested_map, path):
        """Test that access_nested_map that raises a KeyError"""
        with self.assertRaises(KeyError):
            utils.access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """Test get_json function"""
    @parameterized.expand([
        ("http://example.com", {"payload": True}),
        ("http://holberton.io", {"payload": False})
    ])
    @patch("requests.get")
    def test_get_json(self, url: str, payload: dict, mock_get: Mock):
        """Test that get_json returns the expected value"""
        mock_resp = Mock()
        mock_resp.json.return_value = payload
        mock_get.return_value = mock_resp
        self.assertEqual(utils.get_json(url), payload)


class TestMemoize(unittest.TestCase):
    """Test memoization decorator"""

    def test_memoize(self):
        """Test that the memoize decorator works"""
        class TestClass:
            def a_method(self):
                return 42

            @memoize
            def a_property(self):
                return self.a_method()

        test = TestClass()
        mock = Mock(TestClass, 'a_method')

        test.a_property
        test.a_property
        mock.assert_called_once
