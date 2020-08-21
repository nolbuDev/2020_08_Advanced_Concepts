define(['module1', 'module2'], 
    function (module1Import, module2Import){
        var module1 = module1Import;
        var module2 = module2Import;

        function dance() {

        }

        return{
            dance: dance,
        }
    })