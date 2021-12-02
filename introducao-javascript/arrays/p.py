import re as re
code = "var nome = 'octacilio' var email = 'octa.oca44@gmail.com' "

terms = []
terms.append({'type':'ID','lexem':'var'})
terms.append({'type':'ID','lexem':'const'})
terms.append({'type':'ID','lexem':'let'})
terms.append({'type':'ID','lexem':'require'})

#print(terms)
#print(terms[2]['lexem'])

tokens = []

word = ''
for i in code:
    for lexem in terms:
        if i == lexem['lexem']:
            tokens.append('<'+i+','+lexem['type']+'>')

print(tokens)