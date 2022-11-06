var form_id_js = "contact-form"

var sendButton = document.getElementById("js_send")

var data_js = {
    "access_token": "obkzsrogb3ofqi1vrsgmtpqd"
}

function validateContactForm() {
    if (document.getElementById('input-email').value == '' || document.getElementById('input-subject').value == '' || document.getElementById('input-message').value == '') {
        document.getElementById('contact-invalid-msg').style.display = "block"
        return false
    } else {
        return true
    }
}

function js_send() {
    document.getElementById('contact-error-msg').style.display = "none"
    document.getElementById('contact-invalid-msg').style.display = "none"

    if (validateContactForm()) {
        if (getLanguage() == "eng") {
            sendButton.value = 'Sending ...'
        } else {
            sendButton.value = 'En envoyant ...'
        }

        sendButton.disabled = true
        sendButton.classList.add('sending')

        var request = new XMLHttpRequest()
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                sendButton.value = 'Message sent!'
                window.setTimeout(function() { toggleContactForm() }, 2000)
            } else if (request.readyState == 4) {
                console.log(`Could not send message, error: ${request.response}`)
                sendButton.classList.remove('sending')
                document.getElementById('contact-error-msg').style.display = "block"
                
                if (getLanguage() == "eng") {
                    sendButton.value = 'Try again'
                } else {
                    sendButton.value = 'Réessayer'
                }
            }
        }

        var subject = document.getElementById("input-subject").value
        var email = document.getElementById("input-email").value
        var message = document.getElementById("input-message").value

        subject = `New Message: ${subject}`
        message = `Email: ${email}\n\nMessage:\n${message}`

        data_js['subject'] = subject
        data_js['text'] = message
        var params = toParams(data_js)

        request.open("POST", "https://postmail.invotes.com/send", true)
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded")

        request.send(params)

        return false
    }
}

sendButton.onclick = js_send

function toParams(data_js) {
    var form_data = []
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]))
    }

    return form_data.join("&")
}

var js_form = document.getElementById(form_id_js)
js_form.addEventListener("submit", function (e) {
    e.preventDefault()
})

function toggleContactForm() {
    if (document.getElementById(form_id_js)) {
        shadow = document.getElementById('contact-shadow')
        if (shadow.style.display == 'none') {

            document.getElementById('contact-form').reset()
            if (getLanguage() == "eng") {
                sendButton.value = 'Send Message'
            } else {
                sendButton.value = 'Envoyer'
            }
            sendButton.disabled = false
            sendButton.classList.remove('sending')

            document.getElementById('contact-error-msg').style.display = "none"
            document.getElementById('contact-invalid-msg').style.display = "none"

            shadow.classList.add('fadeIn')
            shadow.style.display = 'block'
            
            window.setTimeout(function() {
                shadow.classList.remove('fadeIn')
            }, 500)
        } else {
            shadow.classList.add('fadeOut')
            window.setTimeout(function() { 
                shadow.style.display = 'none'
                shadow.classList.remove('fadeOut')
            }, 500)
        }
    }
}
