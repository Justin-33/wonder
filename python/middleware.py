import gladiator as gld
from flask import request



def middleware_signup():
    data = request.get_json()
    
    valid_data={
        "firstname": data.get("firstname"),
        "lastname": data.get("lastname"),
        "email": data.get("email"),
        "phonenumber": data.get("phonenumber"),
        "password": data.get("password")
    }
    validation_field = (
        ("firstname", gld.required, gld.type_(str)),
        ("lastname", gld.required, gld.type_(str)),
        ("email", gld.required, gld.format_email, gld.type_(str)),
        ("phonenumber", gld.required, gld.type_(str), gld.length_min(11)),
        ("password", gld.required, gld.length_min(6), gld.type_(str))
    )
    validated = gld.validate(validation_field, valid_data)
    return validated

