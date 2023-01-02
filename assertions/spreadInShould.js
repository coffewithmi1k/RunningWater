let appliance = 'Check';


console.log(...(appliance ? ['eq', appliance] : ['match', /Worcester|Ariston GAS 20300|Vaillant RH 28/g]));

// should(...(appliance ? ['eq', appliance] : ['match', /Worcester|Ariston GAS 20300|Vaillant RH 28/g]))