const solver = require("javascript-lp-solver/src/solver");

const input = {
    //entidades
    entities: [{
        identifier: "JD101",
        increment: 1,
        integer: true
    }, {
        identifier: "JD102",
        increment: 1,
        integer: true
    }],
    //agrupadores
    groups: [{
        identifier: "0101"
    }, {
        identifier: "0102"
    }, {
        identifier: "0103"
    }],
    //restrições
    constraints: [{
        entity: "JD101",
        operator: "max",
        value: 60
    }, {
        entity: "JD102",
        operator: "max",
        value: 60
    }, {
        entity: "JD101",
        operator: "min",
        value: 0
    }, {
        entity: "JD102",
        operator: "min",
        value: 0
    }, {
        group: "0101",
        variable: "rendimento",
        operator: "min",
        value: 5000
    }, {
        group: "0102",
        variable: "rendimento",
        operator: "min",
        value: 4500
    }, {
        group: "0103",
        variable: "rendimento",
        operator: "min",
        value: 8000
    }],
    //variáveis
    variables: [{
        identifier: "rendimento",
        entity: "JD101",
        value: 12 * 12
    }, {
        identifier: "rendimento",
        entity: "JD102",
        value: 10 * 15
    }, {
        identifier: "custo",
        entity: "JD101",
        value: 17 * 12
    }, {
        identifier: "custo",
        entity: "JD102",
        value: 38 * 10
    }],
    //objetivo
    objective: {
        variableToOptimize: "custo",
        optimizeType: "min"
    }
}

const model = {
    optimize: input.objective.variableToOptimize,
    opType: input.objective.optimizeType
}

model.constraints = {};

input.constraints.forEach(constraint => {
    let identifier = "";
    if (constraint.entity) {
        identifier += constraint.entity;
    } else if (constraint.variable) {
        identifier += constraint.variable
    }
    if (constraint.group) {
        identifier += "-" + constraint.group;
    }

    const constraintValue = model.constraints[identifier] || {};
    constraintValue[constraint.operator] = constraint.value;
    model.constraints[identifier] = constraintValue;
});

model.variables = {};
model.ints = {};
input.entities.forEach(entity => {
    input.groups.forEach(group => {
        const attr = entity.identifier + "-" + group.identifier;
        model.ints[attr] = entity.integer ? 1 : 0;
        model.variables[attr] = {};
        input.variables.forEach(variable => {
            if ((variable.entity == entity.identifier || variable.entity == undefined) &&
                (variable.group == group || variable.group == undefined)) {
                model.variables[attr][entity.identifier] = entity.increment;
                model.variables[attr][variable.identifier] = variable.value;
                model.variables[attr][variable.identifier + "-" + entity.identifier] = variable.value;
                model.variables[attr][variable.identifier + "-" + group.identifier] = variable.value;
            }
        });
    })
});

console.log(model);
const result = solver.Solve(model);
console.log(result);

// console.log(JSON.stringify(solver));

// // Push the string to file
// fs.writeFile("./result.LP", model, (err, data) => {console.log(data)});