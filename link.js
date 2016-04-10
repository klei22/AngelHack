var sale = { [
    {
        "type": "link",
        "label": "Link with no style or value",
        "link": "https://myurl.com:jwt"
    },
    {
        "type": "link",
        "label": "Link with a value",
        "description": "And a description!",
        "value": "10,500",
        "link": "https://myurl.com:jwt"
    },
    {
        "type": "group",
        "components": [
            {
              "type": "link",
              "label": "Warning style",
              "value": 50,
              "style": "warning",
              "link": "https://myurl.com:jwt"
            },
            {
              "type": "link",
              "label": "Info style",
              "value": 50,
              "style": "info",
              "link": "https://myurl.com:jwt"
            },
            {
              "type": "link",
              "label": "Disable when empty true & 0 value",
              "value": 0,
              "style": "info",
              "link": "https://myurl:jwt",
              "disable_when_empty": true
            },
          ]
      },
]
}