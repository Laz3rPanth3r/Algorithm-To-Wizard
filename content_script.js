walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea' || (node.classList && node.classList.contains('ace_editor'))) { return; }

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bThe Algorithm\b/g, "A Wizard");
	v = v.replace(/\bThe algorithm\b/g, "A wizard");
	v = v.replace(/\bthe Algorithm\b/g, "a Wizard");
	v = v.replace(/\bthe algorithm\b/g, "a wizard");
	
	textNode.nodeValue = v;
}