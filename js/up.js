var app = new Vue (
  {
    el: '#wrapper' ,
    created: function() {
      this.activeUser = this.contacts[0]
      this.listaFiltrata = this.contacts
    },
    data: {
      activeUser: {} ,
      ricerca: '',
      nuovoMessaggio: '',
      listaFiltrata: [],
      oggettoDaMostrare: -1 ,
      contacts: [
      	{
      		name: 'Michele',
      		avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Fabio',
      		avatar: 'https://image.flaticon.com/icons/png/512/147/147144.png',
      		visible: true,
      		messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
      	},
      	{
      		name: 'Samuele',
      		avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png',
      		visible: true,
      		messages: [
      			{
      				date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
      			}
      		],
      	},
      	{
      		name: 'Martina',
      		avatar: 'https://cdn.iconscout.com/icon/free/png-512/avatar-373-456325.png',
      		visible: true,
      		messages: [
      			{
      				date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
      			}
      		],
      	},
      ]
    },
    methods: {
    filtraElemento: function() {
        this.listaFiltrata = this.contacts.filter(
          (element) => {
            return element.name.toUpperCase().includes(this.ricerca.toUpperCase())
            }
        )
      },
      aggiungiElemento: function() {
          var nuovoElemento =
            {
              date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
              text: this.nuovoMessaggio ,
              status: 'sent'
            };
          this.activeUser.messages.push(nuovoElemento);
          this.nuovoMessaggio = '';
            setTimeout(function() {
              var rispostaPredefinita =
                {
                  date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                  text: 'Ok' ,
                  status: 'received'
                };
              app.activeUser.messages.push(rispostaPredefinita);
            }, 1000);
        },
        cancellaMessaggio: function(index) {
          this.activeUser.messages.splice(index, 1)

        },
        cambioIndex: function(index) {
          if(this.oggettoDaMostrare == index) {
            this.oggettoDaMostrare = -1
          } else {
            this.oggettoDaMostrare = index
          }
        }
    }
  }
)
