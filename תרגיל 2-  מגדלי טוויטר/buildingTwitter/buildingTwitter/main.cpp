#include <iostream>
#include "Rectangle.h"
#include "Triangle.h"
using namespace std;
enum Options
{
	rectangle =1, triangle, toExit
};
int main() {
	int option, height, width, opTriangle;
	do
	{
		cout << "enter 1 for rectangle, 2 for triangular and 3 for exit" << endl;
		cin >> option;
		switch (option)
		{
		case rectangle:
		{
			cout << "enter height and width" << endl;
			cin >> height >> width;
			Rectangle myRectangle(height, width);
			if (height - 5 > width || height == width) {
				cout << "area rectangle:" << endl;
				cout << myRectangle.areaRectangle() << endl;
			}
			else {
				cout << "perimeter rectangle:" << endl;
				cout << myRectangle.perimeterRectangle() << endl;
			}
			break;
		}
		case triangle:
		{
			cout << "enter height and width" << endl;
			cin >> height >> width;
			Triangle myTriangle(height, width);
			cout << "enter 1 for perimeter, and 2 for print:" << endl;
			cin >> opTriangle;
			if (opTriangle == 1) {
				cout << "perimeter triangle:" << endl;
				cout << myTriangle.perimeterTriangle() << endl;
			}
			else {
				if (width % 2 == 0 || width / 2 >= height)
					cout << "unable to print" << endl;
				else
					myTriangle.printTriangle();
			}
			break;
		}
		case toExit:
			break;
		default:
			cout << "invalid input" << endl;
		}
	} while (option != 3);
}
