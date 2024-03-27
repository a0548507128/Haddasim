#include "Rectangle.h"
#include <iostream>

Rectangle::Rectangle(int myHeight, int myWidth)
{
	height = myHeight;
	width = myWidth;
}

int Rectangle::perimeterRectangle()const
{
	return height * 2 + width * 2;
}

int Rectangle::areaRectangle()const
{
	return height * width;
}
