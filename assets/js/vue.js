var buscador = new Vue ({
    el: '#search',
    data: {
        textoBusqueda : 'Buscar...'
    },
    methods:{
        submit : function(){
            window.location.href = '/search.html' + textoBusqueda;
        }
    }
}) 