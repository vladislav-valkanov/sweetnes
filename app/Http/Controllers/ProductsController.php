<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;

class ProductsController extends Controller
{
    public function index()
    {
        return view('products');
    }

    public function get(Request $request)
    {
        $products = Products::orderBy('created_at', 'desc')->get();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $products = Products::create($request->all());

        return response()->json($products);
    }

    public function update(Request $request, $id)
    {

        $product = Products::where('id', $id)->get();

        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
        ]);

        $product->update($data);

        return response()->json("ok");
    }

    public function delete($id)
    {
        Products::destroy($id);

        return response()->json("ok");
    }
}
