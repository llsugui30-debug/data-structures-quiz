
const questions=[
{question:"What is a data structure?",answers:["A programming language","A way of organizing and storing data with relationships","A type of algorithm","A computer hardware component"],correct:1},
{question:"A program is defined as:",answers:["Data + Input","Algorithm + Data Structure","Hardware + Software","Compiler + Code"],correct:1},
{question:"An algorithm is best described as:",answers:["Data storage format","Step-by-step procedure to solve a problem","Data structure","Programming error"],correct:1},
{question:"Why are data structures important?",answers:["Make computers faster physically","Affect program design and efficiency","Replace algorithms","Eliminate errors"],correct:1},
{question:"Two main categories of data structures?",answers:["Static/Dynamic","Primitive/Non-Primitive","Linear/Non-Linear","Simple/Complex"],correct:1},
{question:"In a stack, elements are added and removed from:",answers:["Front","Middle","Top","Bottom"],correct:2},
{question:"In a queue, elements are removed from:",answers:["Top","Front","Center","End"],correct:1},
{question:"Which structure has a fixed size?",answers:["Linked List","Array","Stack","Queue"],correct:1},
{question:"Which data structure stores data in branching format?",answers:["Array","Queue","Tree","Stack"],correct:2},
{question:"Which is a non-linear structure?",answers:["Array","Linked List","Graph","Stack"],correct:2},
{question:"Homogeneous structures store:",answers:["Different types","Same type","Only numbers","Only strings"],correct:1},
{question:"Non-homogeneous structure example?",answers:["Array","Integer","Structure/Class","Pointer"],correct:2},
{question:"What is an ADT?",answers:["Physical memory","Hardware","Data model with operations","Programming language"],correct:2},
{question:"ADTs separate:",answers:["Input/output","Logic/implementation","Code/compiler","Hardware/software"],correct:1},
{question:"Choosing a data structure depends on:",answers:["Only memory","Simplicity and relationships","Language","Computer brand"],correct:1},
{question:"Priority queue removes:",answers:["First","Last","Highest priority","Random"],correct:2},
{question:"Pointer is:",answers:["Value variable","Memory address of variable","Function","Loop"],correct:1},
{question:"Pointer variable stores:",answers:["Character","Float","Memory address","Function name"],correct:2},
{question:"Pointer declaration symbol?",answers:["&","*","%","#"],correct:1},
{question:"Correct declaration?",answers:["int p*;","*int p;","int *p;","int p&;"],correct:2},
{question:"In int *p,q; which is pointer?",answers:["Both","Only q","Only p","Neither"],correct:2},
{question:"Address operator (&) does:",answers:["Returns value","Returns address","Deletes memory","Multiplies"],correct:1},
{question:"* with pointer does:",answers:["Adds","Multiplies","Accesses pointed value","Declares variable"],correct:2},
{question:"Address of x?",answers:["x","&x","*x","x&"],correct:1},
{question:"Access value pointed by p?",answers:["&p","*p","p&","p"],correct:1},
{question:"new operator does:",answers:["Deletes memory","Creates dynamic variable","Prints","Constant"],correct:1},
{question:"Correct syntax?",answers:["p=new int;","p=int new;","new p=int;","int=new p;"],correct:0},
{question:"Dynamic memory is called:",answers:["Stack","Register","Heap","Cache"],correct:2},
{question:"If new fails?",answers:["Crash","Returns NULL","Deletes memory","Returns zero"],correct:1},
{question:"delete operator does:",answers:["Allocate","Remove variable","Free memory","Copy"],correct:2},
{question:"Deleted pointer becomes:",answers:["Constant","Undefined","Zero","Integer"],correct:1},
{question:"Pointer to deleted memory:",answers:["Null","Wild","Dangling","Static"],correct:2},
{question:"d+1 in array pointer:",answers:["First value","Next address","Sum","End"],correct:1},
{question:"Dynamic array?",answers:["Fixed","Changing type","Runtime size","No elements"],correct:2},
{question:"Pointer arithmetic allows:",answers:["Change type","Access arrays","Print","Compile faster"],correct:1},
{question:"Pointers can be used with:",answers:["Arrays","Structures","Classes","All"],correct:3},
{question:"Pointer stores:",answers:["Actual value","Memory address","Function name","Variable name"],correct:1},
{question:"Stack principle?",answers:["FIFO","LIFO","Random","Sorted"],correct:1},
{question:"Stack is:",answers:["Linear","Non-linear","Graph","Tree"],correct:0},
{question:"Push operation?",answers:["Remove","Add","Check empty","Sort"],correct:1},
{question:"Pop operation?",answers:["Add","Remove top","Read only","Reverse"],correct:1},
{question:"Check stack empty?",answers:["isFull","isEmpty","pop","push"],correct:1},
{question:"Check stack full?",answers:["push","pop","isFull","size"],correct:2},
{question:"push(5),push(10),push(15), first pop?",answers:["5","10","15","None"],correct:2},
{question:"Stacks used for:",answers:["Sorting only","Function calls","Files","Routing"],correct:1},
{question:"Static stack:",answers:["Unlimited","Linked list","Fixed size","No integers"],correct:2},
{question:"Dynamic stack:",answers:["Cannot grow","Arrays only","Grows as needed","Fixed memory"],correct:2},
{question:"Dynamic stacks usually use:",answers:["Arrays","Linked lists","Trees","Graphs"],correct:1},
{question:"Advantage of dynamic stack?",answers:["Faster compile","Fixed memory","Expands as needed","Less flexibility"],correct:2},
{question:"Initial top of empty stack?",answers:["0","1","-1","NULL"],correct:2},
{
question:"You need an array to represent each node in a linked list.",
answers:["True","False"],
correct:1
},

{
question:"A linked list is a series of connected nodes, where each node is a data structure.",
answers:["True","False"],
correct:0
},

{
question:"This operation means to add the node to the end of the list.",
answers:["Append","Delete","Insert","Traverse"],
correct:0
},

{
question:"The delete operation only involves removing the node from the list without breaking the links created by the next pointers.",
answers:["True","False"],
correct:1
},

{
question:"A linked list can grow or shrink in size as the program runs.",
answers:["True","False"],
correct:0
},

{
question:"Appending a node means adding a node at the start of the list.",
answers:["True","False"],
correct:1
},

{
question:"What does the last node of a singly linked list point to?",
answers:["Itself","The second node","NULL","The first node"],
correct:2
},

{
question:"list<int> myList; is a valid declaration.",
answers:["True","False"],
correct:0
},

{
question:"A doubly linked list has both a next and previous node pointers.",
answers:["True","False"],
correct:0
},

{
question:"The STL list function push_back is equivalent to inserting a node at the end of a list.",
answers:["True","False"],
correct:0
},
{
question:"In a DYNAMIC STACK the pointer TOP stays at the HEAD after a PUSH operation.",
answers:["True","False"],
correct:0
},

{
question:"What is the value of TOP when the STATIC STACK is FULL?",
answers:[
"< to the stack",
"< to the (stack size-1)",
"<= to the stack size",
"= to the (stack size-1)"
],
correct:3
},

{
question:"The manner in which a stack behaves?",
answers:["LILO","FIFO","FILO","LIFO"],
correct:3
},

{
question:"In a DYNAMIC STACK, the node that was POPPED is deleted.",
answers:["True","False"],
correct:0
},

{
question:"A static stack is implemented using arrays.",
answers:["True","False"],
correct:0
},

{
question:"In a static stack, the variable stackSize will handle the total capacity of the stack.",
answers:["True","False"],
correct:0
},

{
question:"In a dynamic implementation of stack, the pointer TOP has an initial value of NULL.",
answers:["True","False"],
correct:0
},

{
question:"The STL stack container may be implemented as a vector, a list, or a deque.",
answers:["True","False"],
correct:0
},

{
question:"Below is a valid declaration of a dynamic stack implemented as a list:\nstack<int, list<int>> iStack;",
answers:["True","False"],
correct:0
},

{
question:"Invoking the STL function top will automatically retrieve the element and move the pointer.",
answers:["True","False"],
correct:1
},
{
question:"The following are stack operations except:",
answers:["Pop","Push","Clear","IsEmpty"],
correct:2
},

{
question:"Below are characteristics of a dynamic stack, except:",
answers:[
"Can be implemented with a dynamic array",
"Can be implemented with a linked list",
"Grow in size as needed",
"Shrink in size as needed"
],
correct:0
},

{
question:"In a dynamic stack, the pointer TOP is like the HEAD which always points to the first element of the linked list.",
answers:["True","False"],
correct:0
},

{
question:"Below is a valid declaration of a dynamic stack implemented as a vector: stack<int> iStack",
answers:["True","False"],
correct:0
},

{
question:"The STL function top returns a reference to the element at the top of the stack.",
answers:["True","False"],
correct:0
},

{
question:"A stack container that is used to adapt to different containers is often referred to as a container adapter.",
answers:["True","False"],
correct:0
},

{
question:"What happens when the node to be deleted is the head node?",
answers:[
"The head pointer is updated to the next node",
"The program crashes",
"The node is skipped",
"The list becomes empty immediately"
],
correct:0
},

{
question:"A linked list is composed of nodes where each node contains both data and a pointer to another node.",
answers:["True","False"],
correct:0
},

{
question:"During list traversal, the node pointer is repeatedly updated to point to the next node until it reaches NULL.",
answers:["True","False"],
correct:0
},

{
question:"Each node in a singly linked list contains a pointer that points to the previous node.",
answers:["True","False"],
correct:1
},

{
question:"Why is a linked list called 'linked'?",
answers:[
"Because all nodes are stored next to each other in memory",
"Because each node has a pointer that links it to another node",
"Because all nodes share the same data",
"Because nodes contain references to previous nodes only"
],
correct:1
},

{
question:"In the insertNode operation, where is the new node inserted?",
answers:[
"Always at the end of the list",
"Randomly in the list",
"At the position based on sorted order of values",
"Always at the beginning of the list"
],
correct:2
},

{
question:"To append a node, the algorithm must traverse the list to locate the last node if the list is not empty.",
answers:["True","False"],
correct:0
},

{
question:"The size() function returns the number of elements in an STL list.",
answers:["True","False"],
correct:0
},

{
question:"Calling appendNode() on an empty list sets the new node as the head of the list.",
answers:["True","False"],
correct:0
},

{
question:"In the displayList() function, what causes the traversal to stop?",
answers:[
"When nodePtr->value is NULL",
"When nodePtr becomes NULL",
"When nodePtr->next is NULL",
"When the first element is printed"
],
correct:1
},

{
question:"Why is inserting elements at the front of an STL list faster than in a vector?",
answers:[
"Lists do not shift existing elements",
"Lists automatically resize memory",
"Lists use indexing",
"Lists store elements contiguously"
],
correct:0
},

{
question:"Which linked list operation modifies node links without breaking the chain?",
answers:[
"Display",
"Deletion",
"Destructor",
"Traversal"
],
correct:1
},

{
question:"What is the main purpose of the following loop in appendNode?\nwhile(nodePtr->next)\nnodePtr = nodePtr->next;",
answers:[
"To delete nodes",
"To sort the list",
"To find the first node",
"To locate the last node"
],
correct:3
},

{
question:"After executing:\nlist.appendNode(2.5);\nlist.appendNode(7.9);\nlist.appendNode(12.6);\nlist.insertNode(10.5);\nWhat is the final list order?",
answers:[
"2.5 → 7.9 → 10.5 → 12.6",
"12.6 → 10.5 → 7.9 → 2.5",
"2.5 → 7.9 → 12.6 → 10.5",
"10.5 → 2.5 → 7.9 → 12.6"
],
correct:0
},

{
question:"What happens when appendNode() is called on an empty linked list?",
answers:[
"The new node becomes the last node only",
"The function does nothing",
"The new node becomes the first node",
"The program crashes"
],
correct:2
},

{
question:"Which condition is used to check whether the linked list is empty?",
answers:[
"head == 0",
"nodePtr == NULL",
"head == NULL",
"nodePtr->next == NULL"
],
correct:2
},

{
question:"What will happen if deleteNode(10) is called when the list is empty?",
answers:[
"Nothing happens",
"The head becomes NULL",
"A new node is created",
"The program crashes"
],
correct:0
},

{
question:"Why does the destructor loop through the entire linked list?",
answers:[
"To sort the list",
"To free all dynamically allocated memory",
"To print the list",
"To insert missing nodes"
],
correct:1
},

{
question:"Consider the following code:\nLinkedList<int> list;\nlist.appendNode(10);\nlist.appendNode(20);\nlist.appendNode(30);\nlist.displayList();\nWhat is the output?",
answers:[
"10 30 20",
"10 20 30",
"20 10 30",
"30 20 10"
],
correct:1
},

{
question:"Which of the following STL list operations is most efficient compared to a vector?",
answers:[
"Inserting elements at the front",
"Accessing elements using index",
"Sorting elements",
"Searching for an element"
],
correct:0
},

{
question:"What is the main purpose of using a template in the LinkedList class?",
answers:[
"To allow the list to store different data types",
"To improve memory allocation",
"To avoid using pointers",
"To restrict the list to integer values"
],
correct:0
},

{
question:"The merge() function can correctly combine two STL lists even if they are unsorted.",
answers:["True","False"],
correct:1
},

{
question:"Before performing a pop operation, which check is most important to avoid an error?",
answers:["isEmpty","isBalanced","isValid","isFull"],
correct:0
},

{
question:"A static stack implementation requires a condition to stop inserting elements when capacity is reached. Which operation supports this requirement?",
answers:["pop","isFull","push","isEmpty"],
correct:1
},

{
question:"After executing on a dynamic stack:\npush(5)\npush(10)\npush(15)\npop(x)\nWhat will be the new value of top->value?",
answers:["10","Undefined","5","15"],
correct:0
},

{
question:"What happens when pop() is called on an empty dynamic stack?",
answers:[
"Program stops",
"Stack is reinitialized",
"A message indicating the stack is empty is displayed",
"A zero value is returned"
],
correct:2
},

{
question:"What action occurs during the push() operation in a dynamic stack?",
answers:[
"The stack is reversed",
"A node is added at the end",
"A node is deleted",
"A node is added before the current top"
],
correct:3
},

{
question:"What is the main difference between a static stack and a dynamic stack?",
answers:[
"Static stacks use pointers while dynamic stacks use arrays",
"Static stacks have fixed size while dynamic stacks grow as needed",
"Static stacks are slower than dynamic stacks",
"Dynamic stacks cannot be implemented in C++"
],
correct:1
},

{
question:"What is the initial value of the variable top in the stack constructor?",
answers:["0","1","-1","stackSize"],
correct:2
},

{
question:"A calculator application uses a stack for evaluating expressions. Which operation is most frequently used to retrieve operands?",
answers:["isFull","isEmpty","pop","push"],
correct:2
},

{
question:"The STL stack can be implemented using only a vector container.",
answers:["True","False"],
correct:1
},

{
question:"Which scenario is best suited for using a dynamic stack instead of a static stack?",
answers:[
"When the number of elements is unpredictable",
"When maximum stack size is known",
"When memory usage must be minimal",
"When fast array indexing is required"
],
correct:0
},

{
question:"Given a static stack of size 5, top is currently equal to 3. How many elements are in the stack?",
answers:["3","5","4","2"],
correct:2
},

{
question:"Which of the following containers can be used to implement an STL stack?",
answers:[
"Deque only",
"List only",
"Vector only",
"Vector, List, or Deque"
],
correct:3
},

{
question:"The C++ STL stack is classified as a container adapter.",
answers:["True","False"],
correct:0
},

{
question:"What type of data structure is the C++ STL stack?",
answers:[
"Dynamic array",
"Associative container",
"Sequential container",
"Container adapter"
],
correct:3
},

{
question:"What order are elements removed from the stack in the sample program?",
answers:[
"LIFO",
"Random order",
"Ascending order",
"FIFO"
],
correct:0
}
];
