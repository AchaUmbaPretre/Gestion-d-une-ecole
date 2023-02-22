export const SidenavItem = [
    {
        titre:'Accueil',
        path: '/',
        icon:'fas fa-home'
    },
    {
        titre:'Eleves',
        path:'/listeGlobal',
        icon:'fas fa-users',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Inscription',
                    path: '/',
                },
                {
                    titre:'Liste globale',
                    path: '/listeGlobal',
                },
                {
                    titre:'Liste par periode',
                    path: '/',
                },
                {
                    titre:'Liste par classe',
                    path: '/',
                },
                {
                    titre:'Liste par filiere',
                    path: '/',
                },
        ]
    },
    {
        titre:'Scolarité',
        path:'/',
        icon:'fas fa-money-bill',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Fixation des montants',
                    path: '/',
                },
                {
                    titre:'Nouveau reglement',
                    path: '/',
                },
                {
                    titre:'Liste reglements par periode',
                    path: '',
                },
                {
                    titre:'Eleves en retard de reglements',
                    path: '/',
                },
                {
                    titre:'Liste ayant tout reglé',
                    path: '/',
                },
                {
                    titre:'Liste des reglements par eleve',
                    path: '/',
                },
                {
                    titre:'Statistiques',
                    path: '/',
                },
        ]
    },
    
    {
        titre:'Professeurs',
        path:'/',
        icon:'fas fa-users',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Nouveau',
                    path: '/',
                },
                {
                    titre:'Liste',
                    path: '/',
                },
                {
                    titre:'Affectation',
                    path: '/',
                },
        ]
    },
    
    {
        titre:'Structure des bulletins',
        path:'/',
        icon:'fas fa-file',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Nouveau',
                    path: '/',
                },
                {
                    titre:'Liste',
                    path: '/',
                },
        ]
    },
    
    {
        titre:'Cahier de texte',
        path:'/',
        icon:'fas fa-file',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Remplissage',
                    path: '/',
                },
                {
                    titre:'Consultation',
                    path: '/',
                },
        ]
    },
    {
        titre:'Notes',
        path:'/',
        icon:'fas fa-file',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Consultation des evaluation',
                    path: '/',
                },
                {
                    titre:'Consultation des moyennes',
                    path: '/',
                },
        ]
    },
    {
        titre:'Bulletins des notes',
        path:'/',
        icon:'fas fa-file',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Consultation',
                    path: '/',
                },
                {
                    titre:'Tablettes des notes',
                    path: '/',
                },
                {
                    titre:'Statistiques des moyennes',
                    path: '/',
                },
        ]
    },
    {
        titre:'Absence des eleves',
        path:'/',
        icon:'fas fa-file',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Consultation des absences',
                    path: '/',
                },
                {
                    titre:"Justification d'absence",
                    path: '/',
                },
        ]
    },
    {
        titre:'Parametres',
        path:'/',
        icon:'fas fa-gear',
        iconClose:'fas fa-angle-up',
        iconDown:'fas fa-angle-down',
        sousTitle:[
                {
                    titre:'Ecole',
                    path: '/',
                },
                {
                    titre:"Les classes",
                    path: '/',
                },
                {
                    titre:"Les filliers",
                    path: '/',
                },
                {
                    titre:"Les matieres",
                    path: '/',
                },
                {
                    titre:"Montant initial en classe",
                    path: '/',
                },
                {
                    titre:"Coefficient/Matiere",
                    path: '/',
                },
        ]
    },
    {
        titre:'Déconnexion',
        path:'',
        icon:'fas fa-home'
    }
]
export default  SidenavItem;