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
            "volume": -20,
            "volumeDefault": false
        }
    }
};

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
}

