#include "Triangle.h"
#include <iostream>
#include <cmath>

using namespace std;
void Triangle::printLines(int numForPrint, int numOfLines)const
{
	for (int j = 0; j < numOfLines; j++) {
		for (int i = 0; i < (width - numForPrint) / 2; i++)
			cout << " ";
		for (int i = 0; i < numForPrint; i++)
			cout << "*";
		cout << endl;
	}
}

Triangle::Triangle(int myHeight, int myWidth)
{
	height = myHeight;
	width = myWidth;
}

double Triangle::perimeterTriangle()const
{
	double hypotenuse = sqrt(pow(0.5 * width, 2) + pow(height, 2));
	return hypotenuse * 2 + width;
}

void Triangle::printTriangle()const
{
	printLines(1, 1);
	if (width == 3) {
		printLines(width, height - 1);
		return;
	}
	printLines(3, ((height - 2) % (width / 2 - 1)));
	for (int j = 3; j < width; j += 2)
		printLines(j, ((height - 2) / (width / 2 - 1)));
	printLines(width, 1);
}
