exports.binarySwitchTurnOn = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOn",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.binarySwitchTurnOff = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOff",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.dimmerSwitchTurnOn = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOn",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "fluter_1",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.dimmerSwitchTurnOff = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOff",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "fluter_1",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.dimmerSwitchLastLevel = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOn",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {
                "useLastLevel": true
            }
        },
        "payload": {}
    }
};

exports.dimmerSwitchSet = {
    "directive": {
        "header": {
            "namespace": "Alexa.BrightnessController",
            "name": "SetBrightness",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {}
        },
        "payload": {
            "brightness": 47
        }
    }
};

exports.dimmerSwitchBrighten = {
    "directive": {
        "header": {
            "namespace": "Alexa.BrightnessController",
            "name": "AdjustBrightness",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {}
        },
        "payload": {
            "brightnessDelta": 25
        }
    }
};

exports.dimmerSwitchDim = {
    "directive": {
        "header": {
            "namespace": "Alexa.BrightnessController",
            "name": "AdjustBrightness",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "essen",
            "cookie": {}
        },
        "payload": {
            "brightnessDelta": -25
        }
    }
};

exports.activateScene = {
    "directive": {
        "header": {
            "namespace": "Alexa.SceneController",
            "name": "Activate",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "Romantik",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.discovery = {
    "directive": {
        "header": {
            "namespace": "Alexa.Discovery",
            "name": "Discover",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820"
        },
        "payload": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            }
        }
    }
};

exports.channelControllerSkip = {
    "directive": {
        "header": {
            "namespace": "Alexa.ChannelController",
            "name": "SkipChannels",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "tv",
            "cookie": {}
        },
        "payload": {
            "channelCount": -2
        }
    }
};

exports.channelControllerChange = {
    "directive": {
        "header": {
            "namespace": "Alexa.ChannelController",
            "name": "ChangeChannel",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "tv",
            "cookie": {}
        },
        "payload": {
            "channel": {
                "number": "12",
            },
        }
    }
};

exports.speakerAdjust = {
    "directive": {
        "header": {
            "namespace": "Alexa.Speaker",
            "name": "AdjustVolume",
            "payloadVersion": "3",
            "messageId": "7a36b2a5-65b2-4dfe-8438-8b964e0e8fed",
            "correlationToken": "AAAAAAAAAQC7cztrpexRtp++PAAfFlSKpAEAAAAAAAB0WgGBbrmf1ZoEYwpLI8v65rx2K/EvWywlDQfFx1bx61KljU5iB6eGnkR4VqLlrYmobC8XvDBNU9hnDzUyPn/YaaBBx6jpcFDD3WFnUe76VTknTaVl15+6O7B3hTrz+rZDd+aiZFL77YFj6K82zZ6jYvATHoOffXMsBClLq0FaCO19hIyzwXrQKPvdN7G5KCXnS4HhjqKCV+a2tA6doX9gsH/ciaMWP5x+DwBxyJeisO34Ir5ajjLzbRIy/8slnja5YWtbUwFjWg6tW+pAx96BrUydKDeANmOMXKj9h1CdodiDDfvWkTIJ933Ak3zE5YIqKcKtzAQq3xnlB/LiWHrPe9B21IiaMNuD/j7fXBpR803aB8lP3qHoJu6GnN4OzuM9KIjVrksteyPrdlwGqjvLJ6e5LFhLkm2VL+mLYpzgDOmiA7tfUQEBLgWmCoboQfJYbVc/GuyOKPouErWABqf9TTg/9YDTbq+EvgYsaAgW8GdsrSFFfsa5hT+hroToCIUee+EomWBpDygdgp26OjfbNVLLW6YvFEHKDKnPG60qh31PXE8="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "Atza|IwEBIPeFR0va0C-wqarnHI7hdkkVs2iDZDIzb150DlfAQh7VjklqsVQtv69zCEw9-dB2syiEryOF2Rddal7n06W-TAtkVfYN5pKQzuLJiYvhVkWTLZ5bVU5VkLfFZBKqPqiYiU8NvO6XRkevUP39OmZ0N5DNLhEVzWrp1DzKkck8ppppVt3gLEU272HhZ7jVMNlBRiapkPc87D1XyFk1PA44hHERFsLE1KF8GVh7xVrOK90K11IupCeBvi2Pz3wL5qhl4tMDuQOIwWqjn9Z_PEDTbxMjoRvxTh0AsQF2DvN3Mq-K3F8paJGA9ResoS7p6flU6zMM1Us1Jt_NpyJ3FO8FitjqYEZpeV5KqKja49d9TA0kUC4kFLyMKDaHooOiHJD1tzvaiD5mhB1YEg521usjeWGhyue6dKxBv8xR8g7oN03w-y5n-hVm1Yxtwc0YSWyYPo8zSQ-WV54w8rSlt2dnw2xYg3sHDtDvHst5y6_Wu0RgzXxV2AofWr2GRVC-Mg-tdP4"
            }, "endpointId": "tv",
            "cookie": {}
        },
        "payload": {
            "volume": -3,
            "volumeDefault": true
        }
    }
}

exports.speakerSetVolume = {
    "directive": {
        "header": {
            "namespace": "Alexa.Speaker",
            "name": "SetVolume",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "tv",
            "cookie": {}
        },
        "payload": {
            "volume": 26
        }
    }
};

exports.speakerMute =
    {
        "directive": {
            "header": {
                "namespace": "Alexa.Speaker",
                "name": "SetMute",
                "payloadVersion": "3",
                "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
                "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
            },
            "endpoint": {
                "scope": {
                    "type": "BearerToken",
                    "token": "access-token-from-skill"
                },
                "endpointId": "tv",
                "cookie": {}
            },
            "payload": {
                "mute": true
            }
        }
    };

exports.stepSpeakerMute = {
    "directive": {
        "header": {
            "namespace": "Alexa.StepSpeaker",
            "name": "SetMute",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "pm8000",
            "cookie": {}
        },
        "payload": {
            "mute": true
        }
    }
};

exports.playbackController = {
    "directive": {
        "header": {
            "namespace": "Alexa.PlaybackController",
            "name": "Play",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "raspiDAC",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.stepSpeakerVolume = {
    "directive": {
        "header": {
            "namespace": "Alexa.StepSpeaker",
            "name": "AdjustVolume",
            "payloadVersion": "3",
            "messageId": "1bd5d003-31b9-476f-ad03-71d471922820",
            "correlationToken": "dFMb0z+PgpgdDmluhJ1LddFvSqZ/jCc8ptlAKulUj90jSqg=="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "access-token-from-skill"
            },
            "endpointId": "pm8000",
            "cookie": {}
        },
        "payload": {
            "volumeSteps": -1
        }
    }
};

exports.pm8000TurnOff = {
    "directive": {
        "header": {
            "namespace": "Alexa.PowerController",
            "name": "TurnOff",
            "payloadVersion": "3",
            "messageId": "7245fe8e-0899-4b5b-85e2-1d1cae538131",
            "correlationToken": "AAAAAAAAAQC7cztrpexRtp++PAAfFlSKpAEAAAAAAABArro2nC5/Zj8wfiDjvc9dXWy2QhArd9rtAWQg1lW7g4XsHBLydXgq5H68/cfxOIdLWGMfZwLZh9GPn9XNP5sMgCBfayxRYDZJUjZqg6AvxKrBnJzcj3ltoEfwCnjIa6+uJFpHaUofSJcz5XwTWS0U9PPU7kMoD4HaTsv6uxRVevArA10WCzZI3Q3xGaFtbCh4R8jIeX3s/RjQPIt42nfFhS09Of5ssIwledrpFaE1YORiy26MQ95HucQqG98hqsEwlvBUzq28r+MWbjSIBqJgkrIOM/5Q3ilkq/354AcYV1Di170P0caAR8+jQzMSmRrSIRH012vfb9hN7OXhuW089iCOtBpOCHhI181lLSC6kYzEdLx6JGht4nfunFRvMT8FJj7odl/i/JxApWFDApDCHMdDdUUKVqaCP51Bsg3kjpA9nI5WC3oO6EYbN83az7rIo2XXrudaApiMAlRRuYZy7FIxxH8F60nypRxP8jEIwG1tScd7MLikHAqbsc8HPUUn1GlvKVCaDy0dcYvZ7vIDFXFerf9gQNYmlaO9FKSs2n4WUbo="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "Atza|IwEBIBNNL9GMphvkwMtcSPcGEzBB7oL1VMbcQh9_CHygnV0rAFhIvah0w_dnR1iXTJsOKfipYdLeln3HM3hJoExC0Tc-cNWejtcQdNC9Dj2BIZL9h7f-F1V5j3-3EJ9jx0ieHsDbEKbelPxSllsfYjqxSJD0muj7jU-3wSaKtjmXCehCC1U4JXa0CyIsKhvxX82-VuWESyshyMeqI6H5M3sSxStUlNWZ2UTsYNAiDKWH0iAONJC54qx3miogfMUqlOUz1Om_WE0anq7Dx2SeRzSsRbvNfW0OavCz3juv5TwBYkc_aNtF1i0akQZWp9wLtv7zEgGpHXkfgyFffWJG96KQdSS1lQPCrx1Hey9C6vaVVpVuQetgPxHmav7WKjcvZDRi0q_l-WfFUINBN-6va2IbRjI-J3ZHYgfaTc3m0_3Mi_X9gKOpwI8c6Do-zWy_fJhKQ_6vnQSuYDkhAmohxWho-FJj4htneg_ksoa8Fv79MWuDDaPQZbQv0ivRSvK5_BhbTcI"
            },
            "endpointId": "pm8000",
            "cookie": {}
        },
        "payload": {}
    }
};

exports.stateReport = {
    "directive": {
        "header": {
            "namespace": "Alexa",
            "name": "ReportState",
            "payloadVersion": "3",
            "messageId": "5e78c5b2-8d44-4326-98eb-e540ad9df383",
            "correlationToken": "AAAAAAAAAQCOTyxl/ibgOstOXUU5Bm/9pAEAAAAAAAAEFm1EfhOX8LBgcZSqU1t8Irq99++KPN2jWYAA/E0PDHNVzQvTceFgCS46i0bH2Vh82DPXE2tX5Agxyag3rhgboWcN3Y+ozmuw2VaTOqM0glMyWq6C0x/g9+S/7oOwum08ZfBRN/hm95G+5tgGhHXqqvZvE6b82EyUvMEhZaeMsfFpKlDSMfiAZ5TBHCTrVjY37n1/Tqe014yGgfVtQHssQOeypScULMxMhO8paSXimf9NIRhe03HKkdL8Jdbr5BekGgmwzwKD6TxP/QmpjDo0pkj1MTGVBLf4xDHsW1jQAU1VxKuj9LEDZurgEnXfkSzF8V6nYG4NhRxhx0Fkfg77E/3R359G7KYTKZQUDUYAQcb/hzAOihU0jhp6tTzLy4pFeO9XcNlZ57OIjaGRMmXSeumkUEZnHQZF4EyxX6Ut6m0rWvyry5J8S/DpFaMeQPK5li8jLOd0u5vjrVNNQLdsnrv6F7gDiUUAoheRDEhMOUCxCf+9PErwNfnrbI4z4jhOAgk89D9O6FyT2L/4EOFKmngaUc9+gaaj9eG88RHiRw7x44k="
        },
        "endpoint": {
            "scope": {
                "type": "BearerToken",
                "token": "Atza|IwEBINrG-yfwlyTgTTcwiP4JCCGqy-BANg37QR2JP32UkjAZ9HPKkRe8lnAAETZy7aZn9ycbf3xYEVuVG3ZDxW38G71cWnJpj2z83FDIZCMJn7H-sUXb-40X957HCDGCe2WtjxM2_VAB_FZ7RdnjIXWJEfKnsyAFrYDrK25BF7wSJ3VCxiLk3cUtZOFbd_jn2f5przz3A_DAGPYQrbDc3OI8uV9LqX4RkxyfiBkNR0pA9YXwB8jNLV3yZF_iVdtbWWNEIhtueOoEWMKfZDIl7i148d8shrypRlMPqEYbRepKOmoQoVpTYU24ZMkCdLJYDB6xVSH22xRSi7fwVaM1DLUADladhKBQq28HBFU5ODDtmDb2OPpHyMeeIO4QM5nSWihznbTzJDLZVBCgnZCcnCV6YHrmJw7ZW9USO1dFsAQiqDX1a4NfmsuxWzddPzf29cIG55Q72ZthTITADqTvXHUqPwvgcR-EylVJDCy0fFvQ7nB3hB6kty5CTWvjoJOxX0NjfEY"
            },
            "endpointId": "wohnen",
            "cookie": {}
        },
        "payload": {}
    }
};

