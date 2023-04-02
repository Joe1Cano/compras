class inventario {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into ventas (id_user, id_product, id_pedido, quantity, price, total) values (?, ?, ?, ?, ?, ?)"; 

        var params = [];

        params.push(jsonData["id_user"]);  
        params.push(jsonData["id_product"]);
        params.push(jsonData["id_pedido"]);
        params.push(jsonData["quantity"]); 
        params.push(jsonData["price"]);
        params.push(jsonData["total"]);

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {

         var sql = "select ventas_id, id_user, id_product, id_pedido, quantity, price, total from ventas";

         var params = []; 

         if (resourceId != "") {
             sql = sql + " where ventas_id = ?";               
             params.push(resourceId);    
         }

         this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        

        var sql = "update tipo set id_user = ?, id_product = ?, id_pedido=?, quantity = ?, price = ?, total = ? where ventas_id = ?";

        console.log(sql);

        var params = [];

        params.push(jsonData["id_user"]);  
        params.push(jsonData["id_product"]);
        params.push(jsonData["id_pedido"]);
        params.push(jsonData["quantity"]);
        params.push(jsonData["price"]);
        params.push(jsonData["total"]);
        params.push(resourceId); 

        console.log(params);
        console.log(resourceId);

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from ventas where ventas_id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = inventario;
