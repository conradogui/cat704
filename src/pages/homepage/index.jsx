import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Plus, User } from "lucide-react"
import { useEffect, useState } from "react"
import CardCat from "../../components/ui/_card-cat"

const getCat = async () => {
  try {
    const response = await fetch('https://nxcuamed0k.execute-api.us-east-1.amazonaws.com/cats');
    if (!response.ok) {
      throw new Error('Failed to fetch cat data');
    }
    const data = await response.json();
    return data; // Retorna os dados da resposta diretamente
  } catch (error) {
    console.error('Error fetching cat data:', error);
    return null; // Retorna null em caso de erro
  }
}

} from "@/components/ui/dropdown-menu";
import { Plus, User } from "lucide-react";
import CatCard from "../../components/CatCard/index.jsx";

const DialogWithCatCard = () => {
  const [isOpen, setIsOpen] = useState(false);
}

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

const Homepage = () => {
  const [catList, setCatList] = useState([]); // Estado para armazenar a lista de gatos

  useEffect(() => {
    // Ao montar o componente, chama a função getCat e atualiza o estado com os dados retornados
    const fetchCatData = async () => {
      const cats = await getCat();
      if (cats) {
        setCatList(cats);
      }
    };
    fetchCatData();
  }, []);

  return (
    <>
      <header className="flex justify-between items-center py-5 px-10 bg-green-800 text-white">
        <h1 className="">Cat 704</h1>

        <div className="flex gap-x-4">
            <Dialog className="bg-white">
              <DialogTrigger asChild>
                <Button variant="outline">Add a cat</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add a cat</DialogTitle>
                </DialogHeader>
                <CatCard/>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <div className="flex flex-col gap-y-2 min-w-40">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Sign in</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Sign up</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          defaultValue="Pedro Duarte"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                          Username
                        </Label>
                        <Input
                          id="username"
                          defaultValue="@peduarte"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Save changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main>
        {/* Lista de nomes de gatos */}
        <ul className="grid grid-cols-1 gap-5 py-10 px-5 bg-gray-50 lg:grid-cols-3">
          {catList.data && catList.data.map((cat) => (
            <li key={cat.id}>
              { console.log(cat)}
              <CardCat name={cat.name} photosrc={cat.photo.url} owner={cat.owner_email} breed={cat.breed.name} description={cat.description} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default Homepage;
