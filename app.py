from flask import Flask, render_template, redirect, request,flash
from flask_mail import Mail, Message
from config import *

app = Flask(__name__)
app.secret_key = SECRET_KEY

mail_settings = {
    "MAIL_SERVER": "smtp.gmail.com",
    "MAIL_PORT":587,
    "MAIL_USE_TLS": True,
    "MAIL_USE_SSL":False,
    "MAIL_USERNAME": EMAIL,
    "MAIL_PASSWORD":SENHA
}
app.config.update(mail_settings)
mail = Mail(app)

class Contato:
    def __init__(self, nome, email,mensagem):
        self.nome = nome
        self.email = email
        self.mensagem = mensagem

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send',methods=['GET','POST'])
def send():
    if request.method == "POST":
        formContato = Contato(
            request.form["nome"],
            request.form["email"],
            request.form["mensagem"]
        )
        msg = Message(
            subject = f'Contato do Portfólio\n\n {formContato.nome} te enviou uma mensagem no portfólio',
            sender = app.config.get("MAIL_USERNAME"),
            recipients = ["seuemail@gmail.com",app.config.get("MAIL_USERNAME")],
            body = f'''
            
            
            {formContato.nome} com o email {formContato.email}, te enviou a seguinte mensagem:
            
            {formContato.mensagem}
            ''')
        mail.send(msg)
        flash("Mensagem enviada com sucesso!")
        

if __name__ == '__main__':
    app.run(debug=True)