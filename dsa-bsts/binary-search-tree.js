class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null)
    {
      this.root = new Node(val);
      return this;
    }
    let node = this.root;
    while (true)
    {
      if (val < node.val)
      {
        if (val.left === null)
        {
          node.left = new Node(val);
          return this;
        }
        else
        {
          node = node.left;
        }
      }
      else if (val > node.val)
      {
        if (val.right === null)
        {
          node.right = new Node(val);
          return this;
        }
        else
        {
          node = node.right;
        }
      }
      else return this;
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    if (this.root === null)
    {
      this.root = new Node(val);
      return this;
    }
    if (currentNode < val)
    {
      if (currentNode.left === null)
      {
        currentNode.left = new Node(val);
        return this;
      }
      else
      {
        return this.insertRecursively(val, currentNode.left);
      }
    }
    if (currentNode > val)
    {
      if (currentNode.right === null)
      {
        currentNode.right = new Node(val);
        return this;
      }
      else
      {
         return this.insertRecursively(val,currentNode.right);
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (true)
    {
      if (val === currentNode.val)
      {
        return currentNode;
      }
      if (val < currentNode.val)
      { 
        if (currentNode.left != null)
        {
          currentNode = currentNode.left;
        }
        else
        {
          break;
        }
      }
      else if ( val > currentNode.val)
      {
        if (currentNode.right != null)
        {
          currentNode = currentNode.right;
        }
        else
        {
          break;
        }
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null)
    {
      return undefined;
    }

    if (val < current.val)
    {
      if (!current.left)
        return undefined;
      return this.findRecursively(val, current.left)
    }
    else if (val > current.val)
    {
      if (!current.right)
        return undefined;
      return this.findRecursively(val, current.right);
    }
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
      let nodeList = [];
      let current= this.root;

      function search(current)
      {
      nodeList.push(current);
      if(current.left)
      {
        search(current.left);
      }
      if (current.right)
      {
        search(current.right);
      }
      }
       search(current);
       return nodeList
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let nodeList = [];
      let current= this.root;

      function search(current)
      {
      if(current.left)
      {
        search(current.left);
      }
      nodeList.push(current);
      if (current.right)
      {
        search(current.right);
      }
      }
       search(current);
       return nodeList
  
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let nodeList = [];
    let current= this.root;

    function search(current)
    {
        if(current.left)
        {
          search(current.left);
        }
        
        if (current.right)
        {
          search(current.right);
        }
        nodeList.push(current);
    }
     search(current);
     return nodeList
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root;
    let queue = [];
    let visited = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      visited.push(node);
      if (node.left)
      {
        queue.push(node.left);
      }
      if (node.right)
      {
        queue.push(node.right);
      }
    }
    return visited
  }


  dfsInOrderIterative() {
    let current = this.root;
    let stack = [];
    let dfs = [];
    while (stack.length > 0||  current)
    {
      while (current)
      {
        stack.push(current)
        cur = cur.right;
      }
    }
    cur = stack.pop();
    if (cur) {
      dfs.push(cur.val);
      cur = cur.right;
    }
    return dfs;
}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
     
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced(current = this.root) {
    if (current === null) return false;

    return maxDepth(current) - minDepth(current) <= 1;

    function minDepth(current) 
    {
      if (current === null) return 0;
      return 1 + Math.min(minDepth(current.left), minDepth(current.right));
    }
    function maxDepth(current) 
    {
      if (current === null) return 0;
      return 1 + Math.max(maxDepth(current.left), maxDepth(current.right));
    }
  }

 

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
