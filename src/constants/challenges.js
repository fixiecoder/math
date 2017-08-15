import { List, Map } from 'immutable';

export default List([
  Map({
    questionCount: 10,
    name: 'Two times table easy',
    id: '2-times-table-easy',
    includedTables: List(['two']),
    methods: List(['MULTIPLY']),
    difficulty: 'EASY',
    history: List()
  }), 
  Map({
    questionCount: 10,
    name: 'Three times table easy',
    id: '3-times-table-easy',
    includedTables: List(['three']),
    methods: List(['MULTIPLY']),
    difficulty: 'EASY',
    history: List()
  })                  
]);

/*
"EASY"
history
:
[]
includedTables
:
three
:
{key: "three", included: false, value: 3, factors: {…}}
two
:
{key: "two", included: true, value: 2, factors: {…}}
__proto__
:
Object
methods
:
MULTIPLY
:
{included: true, method: "MULTIPLY"}
PLUS
:
{included: true, method: "PLUS"}*/